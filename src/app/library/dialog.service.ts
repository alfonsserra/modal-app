import { Injectable, InjectionToken, Injector, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { SystelabModalContext } from './modal';


export const SYS_DIALOG_DATA = new InjectionToken<{}>('SYS_DIALOG_DATA');

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  public createInjector(overlayRef: OverlayRef, dataToPass: SystelabModalContext): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(SYS_DIALOG_DATA, dataToPass);
    injectorTokens.set(OverlayRef, overlayRef);
    return new PortalInjector(this.injector, injectorTokens);
  }

  constructor(public overlay: Overlay, public injector: Injector) {
  }

  public showDialog(component: Type<any>, dialogParameters?: SystelabModalContext): Observable<any> {
    const overlayRef = this.overlay.create({
      height:           dialogParameters.height + 'px',
      width:            dialogParameters.width + 'px',
      hasBackdrop:      true,
      positionStrategy: this.overlay.position()
                          .global()
                          .centerHorizontally()
                          .centerVertically(),
      scrollStrategy:   this.overlay.scrollStrategies.block()
    });
    const userProfilePortal = new ComponentPortal(component, null, this.createInjector(overlayRef, dialogParameters));
    return overlayRef.attach(userProfilePortal).instance.closeEmitter;
    }

}
