
// Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, 
// but allows subclasses to alter the type of objects that will be created.

// product
interface Channel {
    send():void
}

// concrete product 1
class EmailChannel implements Channel{
    send(){
        console.log("Sending email notification")
    }
}

// concrete product 2
class SmsChannel implements Channel{
    send(){
        console.log("Sending sms notification")
    }
}


// creator class
abstract class Notification{

    abstract createChannel() : Channel;


    broadCast(){
        const channel = this.createChannel();
        
        channel.send();
    }
}


// concrete creator 1
class EmailNotification extends Notification{
    createChannel(): Channel {
        return new EmailChannel()
    }
}


// concrete creator 2
class SmsNotification extends Notification{
    createChannel(): Channel {
        return new SmsChannel()
    }
}


// client code
function client(notification: Notification){
    notification.broadCast();
}


client(new EmailNotification());

client(new SmsNotification());