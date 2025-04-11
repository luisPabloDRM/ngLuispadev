import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone:true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  // @Input({required: true})
  // text!:string

  text = input.required<string>

  @Input({required:true})
  title!:string

  @Input({required:true})
  text2!:string

  @Output() messageEvent = new EventEmitter<string>()

  @Output() newMessagge = new EventEmitter<string>()

  sendMessagge(){
    this.messageEvent.emit(`this is a messagge from Outputs`)
  }

  sendOtherMessagge(){
    this.newMessagge.emit('Segunda prueba')
  }

  //TODO:Repasar con más ejemplos de inputs y outputs



}
