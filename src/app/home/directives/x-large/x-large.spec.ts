import {
  it,
  inject,
  async,
  describe,
  beforeEachProviders
} from '@angular/core/testing';

//   TestComponentBuilder

import {Component, provide} from '@angular/core';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

// Load the implementations that should be tested
import {XLarge} from './x-large.directive';

describe('x-large directive', () => {
  // Create a test component to test directives
  @Component({
    template: '',
    directives: [ XLarge ]
  })
  class TestComponent {}

  it('should sent font-size to x-large', async(Inject([TestComponentBuilder], (tcb) => {
    return tcb.overrideTemplate(TestComponent, '<div x-large>Content</div>')
      .createAsync(TestComponent).then((fixture: any) => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement.children[0];
        expect(compiled.style.fontSize).toBe('x-large');
      });
  })));

});
