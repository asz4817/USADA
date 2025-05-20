from datetime import datetime
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from flask_mail import Mail, Message
from pymongo import MongoClient
from config import Config


app = Flask(__name__, static_folder="../frontend/dist", static_url_path="/")
app.config.from_object(Config)
cors = CORS(app, origins='*')

client = MongoClient(app.config['MONGO_URI'])
db = client.get_database()
mail = Mail(app)

@app.route('/')
def home():
    '''home'''
    return send_from_directory(app.static_folder, "index.html")

@app.route('/contact', methods=['POST', 'GET'])
def contact():
    '''backend for contact page'''
    data = request.get_json()

    fname =  data['firstName']
    lname = data['lastName']
    email = data['email']
    message = data['message']


    try:
        db.contactMessages.insert_one({
            'First Name':fname, 
            'Last Name': lname, 
            'Email': email, 
            'Message': message
        })

        msg = Message(f"Contact Us Page: Message from {fname} {lname}",
                       recipients=['zhang.shiyu.amanda@gmail.com'])
        msg.body = f"First Name:  {fname} \
            \nLast Name:  {lname} \
            \n Email:  {email} \
            \n\nMessage:\n {message}"
        mail.send(msg)

    except Exception as e:
        print(f"Failed: {str(e)}")
        return jsonify({"message":  f"Failed: {str(e)}"}), 409

    return jsonify({"Message": "Message received!"}), 200

@app.route('/addToMailout', methods = ['POST', 'GET'])
def add_to_mailout():
    '''Function to add email to mailout list when form is filled out'''
    email = request.get_json()


    if db.mail_list.find_one({'email': email}):
        return jsonify({"message": "This email is already subscribed!"}), 409

    db.mail_list.insert_one({'email':email, 'subscribed': True})
    return jsonify({"message": "Subscribed successfully!"}), 200

@app.route('/upload_newsletter', methods=['POST'])
def upload_newsletter():
    '''Send newsletter out to recipients'''
    subject = request.form['subject']
    body = request.form['body']
    subscribers = list(db.mail_list.find({'subscribed': True}))
    recipients = [subscriber['email'] for subscriber in subscribers]

    try:
        msg = Message(subject, recipients=recipients)
        msg.body = body + "\n"

        files = request.files.getlist('file')

        for file in files:
            if file:
                msg.attach(file.filename, 'application/pdf', file.read(), disposition='inline')
        mail.send(msg)

        db.delivered_newsletters.insert_one({
            'subject': subject,
            'body': body,
            'emails': recipients,
            'delivered_at': datetime.utcnow()
        })
    except Exception as e:
        print(f"Failed to send email: {str(e)}")

    return jsonify({"message": "Emails sent!"}), 202



if __name__ == '__main__':
    app.run(debug=True)
