import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from './redux/actions';

function Greeting({ greeting, fetchGreeting }) {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return <div>{greeting}</div>;
}

const mapStateToProps = state => ({
  greeting: state.greeting
});

const mapDispatchToProps = {
  fetchGreeting
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
