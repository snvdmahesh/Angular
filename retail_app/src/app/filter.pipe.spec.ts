import { FilterByStarRatingPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByStarRatingPipe();
    expect(pipe).toBeTruthy();
  });
});
