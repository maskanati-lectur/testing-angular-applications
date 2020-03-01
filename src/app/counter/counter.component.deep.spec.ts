import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CounterComponent } from './counter.component';
import { MoonComponent } from '../moon/moon.component';

/**
 * We could now go deeper and test the whole component with its dependencies,
 * see if everything is working great.
 * This is an Integrated test.
 */
describe('CounterComponent (deep integrated test)', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let router: Router;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent, MoonComponent],
      imports: [RouterTestingModule]
    }).compileComponents(); // This is not needed if you are in the CLI context
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });
  it('should increment the moon number if increment button is clicked (+1)', () => {
    component.counter = 5; // Fake some increment clicks before.
    const button = fixture.debugElement.nativeElement.querySelector('.button-up');
    var moonComponent = fixture.debugElement.query(By.directive(MoonComponent)).componentInstance;

    button.click();
    button.click();
    fixture.detectChanges();

    expect(component.counter).toEqual(7);
    expect(moonComponent.moons).toBe(component.counter);
  });

  it('should decrement the counter if decrement button is clicked (-1)', () => {
    component.counter = 5; // Fake some increment clicks before.
    const button = fixture.debugElement.nativeElement.querySelector('.button-down');
    var moonComponent = fixture.debugElement.query(By.directive(MoonComponent)).componentInstance;

    button.click();
    button.click();
    fixture.detectChanges();

    expect(component.counter).toEqual(3);
    expect(moonComponent.moons).toBe(component.counter);
  });
});