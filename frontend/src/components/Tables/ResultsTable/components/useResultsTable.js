import React, { useCallback, useMemo } from 'react';
import clsx from 'clsx';

const useResultsTable = ({ headItems, colWidths, colClasses, results }) => {

	const colWidth = useCallback((idx) => {
		const cWidth = colWidths && colWidths?.length && colWidths[idx] !== null
			? colWidths[idx] : '';
		return cWidth && { style: cWidth }
	}, [colWidths]);

	const txtEnd = useCallback((idx, os) => {
		const last = ['', ...headItems].length - 1;
		const last3 = [last, last - 1, last - (os || 2)].includes(idx);
		return last3 && 'text-end';
	}, [headItems]);

	const colClass = useCallback((idx, os = 0) => {
		const cClass = colClasses && colClasses?.length ? colClasses[idx + os] : '';
		return (cClass || txtEnd(idx, os)) && { className: clsx(cClass, txtEnd(idx, os)) }
	}, [colClasses, txtEnd]);

	const rowColClasses = useMemo(() => {
		const hasClasses = results && results.length
			? results.filter(_ => _?.colClasses)
			: [];
		const cClasses = hasClasses?.length ? results.map(_ => _?.colClasses) : [];
		return cClasses?.length ? cClasses[0] : [];
	}, [results]);

	return { colWidth, colClass, rowColClasses }
}

export default useResultsTable
