import Counter from '../components/Counter';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

export default connect(
  state => ({ counter: state.counter }),
  ActionCreators
)(Counter);

connect()第一个参数是一个函数，它将state.counter传递给组件的counter属性
connect（）第二个参数是一个对象，这个对象是所有的action创建函数的集合
第二个参数将所有的action创建函数传到了组件的同名属性（比如 increment被传递到了props.increment中）
