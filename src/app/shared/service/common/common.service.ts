import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public base: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public page: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public last: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public isuserHeader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  public isAdminHeader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public isstudentHeader: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public mainFooter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
}
