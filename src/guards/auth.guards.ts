import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log('request', request);
    //nếu mà return true => thì sẽ  không chặn cho vào
    //nếu mà return false => thì sẽ  chặn đầu vào
    return true;
  }
}
