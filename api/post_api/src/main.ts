/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/http_exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import * as momentTimezone from 'moment-timezone';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors : true});
  app.useGlobalInterceptors(new LoggingInterceptor(), new TimeoutInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());
  Date.prototype.toJSON = function (): any {
    return momentTimezone(this)
      .tz('America/Sao_Paulo')
      .format('YYYY-MM-DD');
  };

  await app.listen(process.env.PORT);
}
bootstrap();
