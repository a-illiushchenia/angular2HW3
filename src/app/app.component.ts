import { Component } from '@angular/core';
import 'whatwg-fetch';
import {Subject, Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public findCount: string;
  public findList: Array<any>;
  public subject: Subject<any> = new Subject();

  constructor(){
    this.subject.debounceTime(300)
      .switchMap(
        (searchValue: string) =>
          Observable.fromPromise(fetch(`https://api.github.com/search/repositories?q=${searchValue}`).then(res => res.json()))
      ).subscribe(res => {console.log(res); this.findRepositories(res.total_count, res.items)});
  }

 public onInputToFilter(value: string) {
   this.subject.next(value);
 }

  public findRepositories(findCount: string, items: Array<any>){
    this.findCount = findCount;
    this.findList = items;
  }
}
