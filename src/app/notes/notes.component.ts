import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  noteObj: any;
  title: any;
  desc: any;
  addNote:any
  constructor() {
        this.showNotes();
  }

  ngOnInit(): void {}

  addnote(data:any) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
      this.noteObj = [];
    } else {
      this.noteObj = JSON.parse(notes);
    }
    if (data.title.length != 0 && data.desc.length != 0) {
      this.noteObj.push(data);
      localStorage.setItem('notes', JSON.stringify(this.noteObj));
      console.log('done')
      this.showNotes();
    } else {
      console.log('type something');
    }
  }
  showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
      this.noteObj = [];
    } else {
      this.noteObj = JSON.parse(notes);
    }
  }

    deleteNote(index: any){
      let notes=localStorage.getItem("notes");
      if(notes==null){
          this.noteObj=[]
      }
      else{
          this.noteObj=JSON.parse(notes)
      }
      this.noteObj.splice(index,1)
      localStorage.setItem("notes",JSON.stringify(this.noteObj));
      this.showNotes()
  }
}
