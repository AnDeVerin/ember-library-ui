const duration = 200;

export default function () {
  this.transition(this.hasClass('modal-if'), this.use('fade', { duration }));

  this.transition(
    this.fromRoute('book.detail.index'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('author.detail.index'),
    this.use('fade', { duration }),
    this.reverse('fade', { duration })
  );
}
