interface Channel {
    send():void
}

class EmailChannel implements Channel{
    send(){
        console.log("Sending email notification")
    }
}

class SmsChannel implements Channel{
    send(){
        console.log("Sending sms notification")
    }
}


abstract class Notification{

    abstract createChannel() : Channel;


    broadCast(){
        const channel = this.createChannel();
        
        channel.send();
    }
}


class EmailNotification extends Notification{
    createChannel(): Channel {
        return new EmailChannel()
    }
}

class SmsNotification extends Notification{
    createChannel(): Channel {
        return new SmsChannel()
    }
}


function client(notification: Notification){
    notification.broadCast();
}

client(new EmailNotification());

client(new SmsNotification());