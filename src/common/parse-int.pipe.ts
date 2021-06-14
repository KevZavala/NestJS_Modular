import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const id = parseInt(value, 10);
    if (isNaN(id)) {
      throw new BadRequestException(`${value} is not a number`);
    }
    return id;
  }
}
