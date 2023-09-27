import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkoutProtectorGuard } from './checkout-protector.guard';

describe('checkoutProtectorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkoutProtectorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
