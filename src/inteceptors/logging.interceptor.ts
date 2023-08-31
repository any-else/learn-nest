import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('context', context.switchToHttp().getRequest().body);
    //user => bắn => đi interceptor (11 => 16) => đường đẫn mà áp dụng LoggingInterceptor
    // => pipe(validator) => xử lý => LoggingInterceptor(17 => 18)=> client
    return next.handle().pipe(
      map((data) => {
        console.log('bla bla', data);
        return {
          data: {
            ...data,
            email: data.email.toUpperCase(),
          },
          statusCode: HttpStatus.OK,
        };
      }),
    );
  }
}
