import Component from '@glimmer/component';

export default class AuthorFormComponent extends Component {
  first = this.args.author.first || '';
  last = this.args.author.last || '';
}
