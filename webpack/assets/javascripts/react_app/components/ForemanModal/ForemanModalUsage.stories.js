import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'patternfly-react';
import { useDispatch, connect } from 'react-redux';
import { storiesOf } from '@theforeman/stories';
import {
  setModalOpen as setModalOpenAction,
  setModalClosed as setModalClosedAction,
} from './ForemanModalActions';
import { selectIsModalOpen } from './ForemanModalSelectors';
import storeDecorator from '../../../../../stories/storeDecorator';
import ForemanModal from '.';
import { useForemanModal } from './ForemanModalHooks';
import Story from '../../../../../stories/components/Story';

// eslint-disable react/jsx-curly-brace-presence
storiesOf('Components|ForemanModal/ForemanModal Usage', module)
  .addDecorator(storeDecorator) // add Redux store to story
  .add('ForemanModal Basics', () =>
    // using createElement here so that hooks work in stories
    React.createElement(() => {
      const { setModalOpen } = useForemanModal({ id: 'reduxModal' });
      return (
        <Story>
          <Button bsStyle="primary" onClick={setModalOpen}>
            Show Modal
          </Button>
          <ForemanModal id="reduxModal" title="Modal IDs and Redux">
            <ForemanModal.Header />
            <h3>ForemanModal is controlled with Redux actions</h3>
            <p>
              ForemanModals can be controlled from anywhere
              <br />
              in the application, with a single source of truth for modal state.
            </p>
            <h3>How to use ForemanModal</h3>
            <p>ForemanModals require an ID prop.</p>
            <p>It should be a descriptive unique string.</p>
            <br />
            <code>
              {`<ForemanModal id="reduxModal" title="ForemanModal uses Redux">`}
            </code>
            <br />
            <br />
            <p>
              Once you&apos;ve assigned an ID, modal state can be controlled in
              any of the following ways:
              <ul>
                <li>
                  <strong>In connected class components: </strong>By dispatching
                  Redux actions with mapDispatchToProps
                </li>
                <li>
                  <strong>In function components: </strong> With useForemanModal
                  hook, which handles Redux for you
                </li>
                <li>
                  <strong>In function components: </strong> With useSelector and
                  useDispatch hooks from react-redux
                </li>
              </ul>
            </p>
            <p>See the stories below for examples.</p>
            <ForemanModal.Footer />
          </ForemanModal>
        </Story>
      );
    })
  );

storiesOf('Components|ForemanModal/ForemanModal Usage', module)
  .addDecorator(storeDecorator) // add Redux store to story
  .add('With useForemanModal Hook', () =>
    // using createElement here so that hooks work in stories
    React.createElement(() => {
      const { modalOpen, setModalOpen } = useForemanModal({ id: 'hooks' });
      return (
        <Story>
          <Button bsStyle="primary" onClick={setModalOpen}>
            Modal is{' '}
            {modalOpen ? 'OPEN. Click to close' : 'CLOSED. Click to open'}
          </Button>
          <ForemanModal id="hooks" title="With useForemanModal Hook">
            <ForemanModal.Header />
            The useForemanModal hook returns 3 objects: <br />
            <ul>
              <li>modalOpen: boolean</li>
              <li>setModalOpen: function to open that specific modal</li>
              <li>setModalClosed: function to close that specific modal</li>
            </ul>
            <br />
            These functions take care of the Redux state and actions for you,
            <br />
            so you don&apos;t have to connect your parent component directly.
            <p>Click the STORY tab below to see the code.</p>
            <ForemanModal.Footer />
          </ForemanModal>
        </Story>
      );
    })
  );

storiesOf('Components|ForemanModal/ForemanModal Usage', module)
  .addDecorator(storeDecorator) // add Redux store to story
  .add('With react-redux hooks', () =>
    // using createElement here so that hooks work in stories
    React.createElement(() => {
      const dispatch = useDispatch();
      return (
        <Story>
          <Button
            bsStyle="primary"
            onClick={() =>
              dispatch(setModalOpenAction({ id: 'reduxActionsModal' }))
            }
          >
            Show Modal
          </Button>
          <ForemanModal id="reduxActionsModal" title="With react-redux hooks">
            <ForemanModal.Header />
            <p>If you prefer, you can use the hooks provided by react-redux.</p>
            <p>As before, make sure to assign your modal an ID prop:</p>
            <br />
            <code>
              {`<ForemanModal id="reduxActionsModal" title="ForemanModal uses Redux">`}
            </code>
            <br />
            <h3>Modal state is controlled with Redux actions</h3>
            <p>
              Control the modal state with the setModalOpen and setModalClosed
              actions. Make sure the ID passed to the action matches your ID
              prop.
            </p>
            <br />
            <code>
              {`const dispatch = useDispatch();
                ...
                dispatch(setModalOpen({ id: 'reduxActionsModal' }));
                `}
            </code>
            <br />
            <code>
              {`const dispatch = useDispatch();
                ...
                dispatch(setModalClosed({ id: 'reduxActionsModal' }));
                `}
            </code>
            <p>
              In this way, ForemanModals can be controlled from anywhere
              <br />
              in the application, with a single source of truth for modal state.
            </p>
            <p>
              You can also read the modal state by ID by using the selectors:
            </p>
            <br />
            <code>{`// returns { open: true }`}</code>
            <br />
            <code>
              {`const modalOpenState = useSelector(state => selectModalStateById(state, 'reduxActionsModal'));`}
            </code>
            <br />
            <br />
            <code>{/* returns true */}</code>
            <br />
            <code>
              {`const isModalOpen = useSelector(state => selectIsModalOpen(state, 'reduxActionsModal'));`}
            </code>
            <ForemanModal.Footer />
          </ForemanModal>
        </Story>
      );
    })
  );

storiesOf('Components|ForemanModal/ForemanModal Usage', module)
  .addDecorator(storeDecorator) // add Redux store to story
  .add('With connected component', () => {
    const FmContainer = ({ setModalOpen, setModalClosed, modalOpen }) => (
      <React.Fragment>
        <Button bsStyle="primary" onClick={setModalOpen}>
          Modal is{' '}
          {modalOpen ? 'OPEN. Click to close' : 'CLOSED. Click to open'}
        </Button>
        <ForemanModal id="connectedContainer" title="With connected component">
          <ForemanModal.Header />
          If the parent of {`<ForemanModal>`} is a class component, or you just
          don&apos;t want to use Hooks, you can use Redux like normal, with
          connect(), mapStateToProps, and mapDispatchToProps. Click the STORY
          tab to see the code.
          <ForemanModal.Footer />
        </ForemanModal>
      </React.Fragment>
    );

    FmContainer.propTypes = {
      setModalOpen: PropTypes.func.isRequired,
      setModalClosed: PropTypes.func.isRequired,
      modalOpen: PropTypes.bool.isRequired,
    };

    const mapStateToProps = state => ({
      modalOpen: selectIsModalOpen(state, 'connectedContainer'),
    });
    const mapDispatchToProps = {
      setModalOpen: () => setModalOpenAction({ id: 'connectedContainer' }),
      setModalClosed: () => setModalClosedAction({ id: 'connectedContainer' }),
    };
    const ConnectedContainer = connect(
      mapStateToProps,
      mapDispatchToProps
    )(FmContainer);
    // normally you would export default ConnectedContainer here

    return (
      <Story>
        <ConnectedContainer />
      </Story>
    );
  });
