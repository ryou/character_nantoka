const gulp = require('gulp');
const gm = require('gulp-gm');

const data = [
  {
    lower_folder: 'body_back',
    upper_folder: 'body_front',
    dest_folder: 'body',
    files: [
      '1_body',
      '2_body',
      '3_body',
      '4_body',
      '5_body',
      '6_body',
      '7_body',
      '8_body',
      '9_body',
      '10_body',
      '11_body',
      '12_body',
      '13_body',
      '14_body',
      '15_body',
      '16_body',
      '17_body',
      '18_body',
      '19_body',
      '20_body',
    ],
  },
  {
    lower_folder: 'face_back',
    upper_folder: 'face_front',
    dest_folder: 'face',
    files: [
      '1_face',
      '2_face',
      '3_face',
      '4_face',
      '5_face',
      '6_face',
      '7_face',
      '8_face',
      '9_face',
      '10_face',
      '11_face',
      '12_face',
      '13_face',
      '14_face',
      '15_face',
    ],
  },
];

module.exports = () => {
  gulp.task('composite', (cb) => {
    const composite = (lowerFolder, upperFolder, filename, destFolder) => {
      return new Promise((resolve) => {
        gulp.src(`./src/sprite/composite_files/${lowerFolder}/${filename}.png`)
          .pipe(gm(function(gmfile) {
            return gmfile.composite(`./src/sprite/composite_files/${upperFolder}/${filename}.png`);
          }, {
            imageMagick: true,
          }))
          .pipe(gulp.dest(`./src/sprite/to_sprite/${destFolder}`))
          .on('end', resolve);
      });
    }

    Promise.resolve()
      .then(() => {
        return Promise.all(data[0].files.map((filename) => {
          return composite(data[0].lower_folder, data[0].upper_folder, filename, data[0].dest_folder);
        }));
      })
      .then(() => {
        return Promise.all(data[1].files.map((filename) => {
          return composite(data[1].lower_folder, data[1].upper_folder, filename, data[1].dest_folder);
        }));
      })
      .then(() => {
        cb();
      });
  });
};
