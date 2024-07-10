class Notification {
    constructor(notificationId,createdTime,content,reciver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.reciver = reciver;
    }
    send() {
        console.log(`Notification has been sent to ${this.reciver}`)
    }
}

class EmailNotification extends Notification {
    constructor(notificationId,createdTime, content, reciver) {
        super(notificationId,createdTime,content, reciver)
    }
 }

class SMSNotification extends Notification {
    constructor(notificationId, createdTime, content, reciver) {
        super(notificationId, createdTime ,content ,reciver)
    }
}
const janeEmailEx2 = new EmailNotification ("00700","7 July 2024", "Assignment","Antemail")
janeEmailEx2.send()
const janePhoneNumberEx2 = new SMSNotification ("00700","7 July 2024", "Assignment","021234567")
janePhoneNumberEx2.send()