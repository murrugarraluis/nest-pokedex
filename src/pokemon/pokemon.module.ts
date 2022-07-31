import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonShema } from './entities/pokemon.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pokemon.name, schema: PokemonShema }]),
  ],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
