import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFolder} from './../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public folders$!: Observable<Array<IFolder>>;
public text = '';
  constructor( private httpService: HttpService) { }


  ngOnInit():void {
  }

  getfolders():void {
    this.folders$ = this.httpService.get('folders');
  }

  enterDir(folder: IFolder) {
    if (!folder.isDir) {
      return;
    }
    const fullPath = folder.absolutePath
    this.folders$ = this.httpService.post('folders/enterDir'  , {fullPath});
  }

  // createDir(newFullPath: string) {
  createDir() {
    console.log(this.text);
    
    this.folders$ =  this.httpService.post('folders/createDir'  , {});
  }

}
