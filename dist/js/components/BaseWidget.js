class BaseWidget {
  constructor(wrapperElement, initialValue){
    const thisWidget = this;
    thisWidget.dom = {};
    thisWidget.dom.wrapper = wrapperElement;
    thisWidget.correctvalue = initialValue;
  }
  get value(){
    const thisWidget = this;
    return thisWidget.correctvalue;
  }
  set value(value){
    const thisWidget = this;
    const newValue = thisWidget.parseValue(value);
    if (thisWidget.correctvalue !== newValue && thisWidget.isValid(newValue)){
      thisWidget.correctvalue = newValue;
    }
    thisWidget.renderValue();
    thisWidget.announce();
  }
  setValue(value){
    const thisWidget = this;
    thisWidget.value = value;
  }
  parseValue(value){
    return parseInt(value);
  }
  isValid(value){
    return !isNaN(value);
  }
  renderValue(){
    const thisWidget = this;
    thisWidget.dom.wrapper.innerHTML = thisWidget.value;
  }
  announce(){
    const thisWidget = this;
    const event = new CustomEvent('Updated', {
      bubbles: true
    });
    thisWidget.dom.wrapper.dispatchEvent(event);
  }
}

export default BaseWidget;