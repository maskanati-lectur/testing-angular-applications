import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CounterComponent } from './counter.component';
import { MoonComponent } from '../moon/moon.component';

describe('CounterComponent (auto generated)', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


/**
 * This component has some logic in it, and a very simple template.
 * For now, we only want to test the class logic. For doing so, 
 * we will test only the component class without rendering the template.
 * This test is an Isolated test.
 */
describe('CounterComponent (isolated test)', () => {
  it('should instantiate', () => {
    const component: CounterComponent = new CounterComponent();
    expect(component).toBeDefined();
  });

  it('should start with a counter at `0`', () => {
    const component: CounterComponent = new CounterComponent();
    expect(component.counter).toEqual(0);
  });

  it('should be able to increment the counter (+1)', () => {
    const component: CounterComponent = new CounterComponent();
    component.counter = 5;

    component.increment();
    component.increment();

    expect(component.counter).toEqual(7);
  });

  it('should be able to decrement the counter (-1)', () => {
    const component: CounterComponent = new CounterComponent();
    component.counter = 5;

    component.decrement();
    component.decrement();

    expect(component.counter).toEqual(3);
  });
});

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

/**
 * We could now go deeper and test the whole component with its dependencies,
 * see if everything is working great.
 * This is an Integrated test.
 */
describe('CounterComponent (integrated test)', () => {
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