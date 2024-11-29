import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.dto';
import { User } from './dto/user.dto';
import { UpdateDto } from './dto/update.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('sign-up')
  async create(@Body() data: CreateUserDto): Promise<User> {
    return this.userService.create(data);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() data: UpdateDto,
  ): Promise<{ message: string }> {
    return this.userService.update(id, data);
  }

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
