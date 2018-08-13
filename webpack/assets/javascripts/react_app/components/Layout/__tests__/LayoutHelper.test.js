import { combineMenuItems } from '../LayoutHelper';
import { layoutMock } from '../Layout.fixtures';

describe('LayoutHelper', () => {
  it('should combineMenuItems', () => {
    const combined = combineMenuItems(layoutMock.data);
    expect(combined).toMatchSnapshot();
  });
});
