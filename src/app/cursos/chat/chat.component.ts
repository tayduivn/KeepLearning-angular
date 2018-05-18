import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as io from 'socket.io-client'
import { Icourses } from '../interfaces/icourses';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: any[];
  socket: any;
  @ViewChild('message', { read: ElementRef }) public chat: ElementRef;
  course: Icourses;
  username: string;
  socketConnected: boolean = false;

  constructor( private activatedRoute: ActivatedRoute, private courseService: CoursesService ) { }

  ngOnInit() {
    this.courseService.getUserName().subscribe( res => this.username = res);
    this.course = this.activatedRoute.snapshot.data['event'];

    this.socket = io('http://localhost:8000');
    this.socket.on('conectado', (datos) => {
      this.messages = [];
      this.socketConnected = true;
   });
   this.socket.on('msg' + this.course._id, datos => {
      this.messages.push({msg: datos, mine: false, user: this.username});
      setTimeout(() => {
        this.scrollToEnd();
      }, 0);
  })
  }

  sendMessage(msg) {
    if (msg.value) {
      this.messages.push({msg: msg.value, mine: true});
      this.socket.emit('message' + this.course._id, msg.value);
      msg.value = '';
      setTimeout(() => {
        this.scrollToEnd();
      }, 0);
    }
  }
  
  scrollToEnd() {
    this.chat.nativeElement.scrollTop = this.chat.nativeElement.scrollHeight;
  }

}
