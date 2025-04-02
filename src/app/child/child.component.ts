import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone:true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input({required: true})
  text!:string

  @Input({required:true})
  title!:string

  @Output() messageEvent = new EventEmitter<string>()

  sendMessagge(){
    this.messageEvent.emit(`this is a messagge from Outputs`)
  }

  //TODO:Repasar con más ejemplos de inputs y outputs

}
