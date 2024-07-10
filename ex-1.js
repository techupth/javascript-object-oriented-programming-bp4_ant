class EmailNotification {
    constructor (notificationId, createdTime, content, reciver) {
        this.notificationId = notificationId
        this.createdTime = createdTime
        this.content = content
        this.reciver = reciver
    }
    send() {
        console.log(`Notification has been sent to ${this.reciver}`)
    }
}

class SMSNotification {
    constructor (notificationId, createdTime, content, phoneNumber) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber
    }
    send() {
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
}
const janeEmail = new EmailNotification ("00700","7 July 2024", "Assignment","Antemail")
janeEmail.send()
const janePhoneNumber = new SMSNotification ("00700","7 July 2024", "Assignment","021234567")
janePhoneNumber.send()
