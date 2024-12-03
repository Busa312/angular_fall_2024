import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, catchError, combineLatest, debounce, debounceTime, filter, from, map, merge, min, Observable, of, ReplaySubject, scan, Subject, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'source';
  list: any[] = [];

  sub1: ReplaySubject<number> = new ReplaySubject(2);

  form: FormGroup = new FormGroup({
    search: new FormControl('')
  })


  ngOnInit(): void {

    this.form.get('search')?.valueChanges.pipe(
      filter(val => val.length> 5),

      // debounceTime(1000),

      tap(val => console.log(val))

    ).subscribe();


    // this.sub1.subscribe(val => {
    //   this.list.push(val);
    // });

    // this.sub1.subscribe(val => {
    //   console.log(val);
    // })

    // setTimeout(() => {
    //   this.sub1.next(2);
    // }, 1000);

    // setTimeout(() => {
    //   this.sub1.next(3);
    // }, 2000);

    // setTimeout(() => {
    //   this.sub1.next(5);
    // }, 5000);

    // setTimeout(() => {
    //   this.sub1.next(10);
    // }, 10000);

    // setTimeout(() => {
    //   this.sub1.subscribe(val => console.log(val))
    // }, 11000);


    
    // const obs = of(['asdasd', 'asd as', 'asdasd']);

    // setTimeout(() => {
    //   obs.subscribe({
    //     next: val => {
    //       this.list = val;
    //     },
    //     error: (err) => {
          
    //     }
    //   });
    // }, 5000);

    const obs1 = from([1,2,3,4,5]);

    // obs1.pipe(
    //   map((val: number) => val * val),
    // ).subscribe(val => {
    //   this.list.push(val)
    // })

    // from([1, 2, 3, 4, 5]).pipe(
    //   filter(val => val % 2 === 0),
    //   scan((a, b) => a + b, 0),
    //   debounceTime(500)
    // ).subscribe(
    //   val => {
    //     console.log(val)
    //   }
    // )


    const obs2 = from(['A', 'B', 'C']);
    const obs3 = from([1, 2, 3]);

    // merge(obs2, obs3).subscribe(
    //   val => console.log(val)
    // )

    // combineLatest([obs3, obs2]).subscribe(([val1, val2]) => {
    //   console.log(val1 + " " + val2);
    // } );


    // throwError('ERROR!').pipe(
    //   catchError((err) => {
    //     console.log(err);
    //     return of('helloo');
    //   })
    // ).subscribe(val => {
    //   console.log(val)
    // });

  }

}
