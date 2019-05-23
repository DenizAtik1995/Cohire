import React from 'react';

const Filter = (props) => {
    const { handleFilter } = props;
    const state = {
        genresIds: {
            action_id: 28,
            adventure_id: 12,
            animation_id: 16,
            comedy_id: 35,
            crime_id: 80,
            documentary_id: 99,
            fantasy_id: 14,
            history_id: 27,
            family_id: 10751
        }
    };

    //https://api.themoviedb.org/3/genre/movie/list?api_key=d5989da1517d7182f1ae5529fcbdb122&language=en-US
    return (
        <div>
            <div className="filter-wrapper">
                <div className="input-group">
                    <input type="radio" name="action" value={state.genresIds.action_id} onChange={(e) => handleFilter(e)} /> Action
                </div>
                <div className="input-group">
                    <input type="radio" name="Adventure" value={state.genresIds.adventure_id} onChange={(e) => handleFilter(e)} /> Adventure
                </div>
                <div className="input-group">
                    <input type="radio" name="Comedy" value={state.genresIds.comedy_id} onChange={(e) => handleFilter(e)} /> Comedy
                </div>
                <div className="input-group">
                    <input type="radio" name="crime film" value={state.genresIds.crime_id} onChange={(e) => handleFilter(e)} /> Crime film
                </div>
                <div className="input-group">
                    <input type="radio" name="Documentary" value={state.genresIds.documentary_id} onChange={(e) => handleFilter(e)} /> Documentary
                </div>
                <div className="input-group">
                    <input type="radio" name="Drama" value={state.genresIds.drama_id} onChange={(e) => handleFilter(e)} /> Drama
                </div>
                <div className="input-group">
                    <input type="radio" name="erotic" value={state.genresIds.erotic_id} onChange={(e) => handleFilter(e)} /> Erotic
                </div>
                <div className="input-group">
                    <input type="radio" name="fantasy" value={state.genresIds.fantasy_id} onChange={(e) => handleFilter(e)} /> fantasy
                </div>
                <div className="input-group">
                    <input type="radio" name="family" value={state.genresIds.family_id} onChange={(e) => handleFilter(e)} /> Family
                </div>
                <div className="input-group">
                    <input type="radio" name="history" value={state.genresIds.history_id} onChange={(e) => handleFilter(e)} /> History
                </div>
                <div className="input-group">
                    <input type="radio" name="horror" value={state.genresIds.horror_id} onChange={(e) => handleFilter(e)} /> Horror
                </div>
            </div>
        </div>
    );
};

export default Filter;
