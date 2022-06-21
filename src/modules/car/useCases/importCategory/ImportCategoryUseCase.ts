import { parse } from 'csv-parse';
import fs from 'fs';

export class ImportCategoryUseCase {
  execute(file: Express.Multer.File):void {
    console.log(file);

    const stream = fs.createReadStream(file.path);

    const parseFile = parse();
    stream.pipe(parseFile);
    parseFile.on('data', async (line) => {
      console.log(line);
    });


    // const stream = fs.createReadStream(file.path);

    // const parseFile = csv.parse({
    //   columns: true,
    //   trim: true,
    //   skip_empty_lines: true,
    // });
    // stream.pipe(parseFile);

    // parseFile.on('data', async (line) => {
    //   console.log(line);
    // });
  }
}
