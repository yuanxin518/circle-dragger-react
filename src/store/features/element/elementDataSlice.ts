import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';

interface ElementData {
	currentStyle: React.CSSProperties;
}
const initialState: ElementData = {
	currentStyle: {},
};
export const elementDataSlice = createSlice({
	name: 'elementData',
	initialState,
	reducers: {
		setCurrentStyleConfiguration: (
			state,
			action: PayloadAction<React.CSSProperties>
		) => {
			state.currentStyle = { ...action.payload };
		},
	},
});
export const { setCurrentStyleConfiguration } = elementDataSlice.actions;

export const selectCurrentStyleConfiguration = (state: RootState) => {
	return state.elementData.currentStyle;
};
export default elementDataSlice.reducer;
