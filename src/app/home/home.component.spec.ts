import 'zone.js/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeAll(() => {
    TestBed.initTestEnvironment([], { suppressAngularStabilityTestZone: true });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the expected template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p').textContent).toContain('home works!');
  });

  it('should not have any applied styles', () => {
    const styles = window.getComputedStyle(fixture.nativeElement);
    // Check that there are no applied styles (since your CSS file is empty)
    expect(styles.length).toBe(0);
  });
});
