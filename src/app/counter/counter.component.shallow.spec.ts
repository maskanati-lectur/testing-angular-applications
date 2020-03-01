import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CounterComponent } from './counter.component';
import { MoonComponent } from '../moon/moon.component';
/**
 * Now that the inner class' logic is tested.
 * To test if the buttons trigger the right logic, we need to test them.
 * We need to render the template and trigger some clicks.
 * Because this component'template contains another component,
 * and we only want to test the relevant part of the template, we will not
 * render the child component.
 * This is a Shallow test.
 */
describe('CounterComponent (shallow test)', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should increment the counter if increment button is clicked (+1)', () => {
    const button = fixture.debugElement.nativeElement.querySelector('.button-up');

    button.click();
    button.click();

    expect(component.counter).toEqual(2);
  });

  it('should decrement the counter if decrement button is clicked (-1)', () => {
    component.counter = 5; // Fake some increment clicks before.
    const button = fixture.debugElement.nativeElement.querySelector('.button-down');

    button.click();
    button.click();

    expect(component.counter).toEqual(3);
  });

  it('should reset the counter if reset button is clicked (0)', () => {
    component.counter = 3; // Fake some increment clicks before.
    const button = fixture.debugElement.nativeElement.querySelector('.button-0');

    button.click();

    expect(component.counter).toEqual(0);
  });
});
