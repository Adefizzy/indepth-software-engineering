


// Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.
 
interface Button {
    onClick():void
}


interface Checkbox{
    onChange():void
}


class WindowButton implements Button{
    onClick(): void {
        console.log("Window button is clicked")
    }
}

class WindowCheckbox implements Checkbox{
    onChange(): void {
        console.log("Window checkbox has changed");
    }
}


class MacButton implements Button{
    onClick(): void {
        console.log("Mac button is clicked")
    }
}


class MacCheckbox implements Checkbox{
    onChange(): void {
        console.log("Mac checkox is changed");
    }
}


abstract class GUIFactory{
    abstract createButton():Button;
    abstract createCheckbox(): Checkbox
}


class WindowUI extends GUIFactory {
    createButton(): Button {
        return new WindowButton()
    }

    createCheckbox(): Checkbox {
        return new WindowCheckbox()
    }
}


class MacUI extends GUIFactory{
    createButton(): Button {
        return new MacButton()
    }

    createCheckbox(): Checkbox {
        return new MacCheckbox()
    }
}


function client (UI: GUIFactory){
    const button = UI.createButton();
    const checkbox = UI.createCheckbox();


    button.onClick()
    checkbox.onChange()
}


client(new WindowUI())
client(new MacUI())







