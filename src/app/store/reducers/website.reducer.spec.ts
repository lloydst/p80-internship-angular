import { reducer, initialState } from './website.reducer';

describe('Website Reducer', () => {
  describe('a action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
