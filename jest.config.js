/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

module.exports = {
	collectCoverage: true,
	coverageReporters: ['json', 'lcov'],
	coverageThreshold: {
		'./packages/clay-alert/src/': {
			branches: 95,
			functions: 75,
			lines: 100,
			statements: 100,
		},
		'./packages/clay-autocomplete/src/': {
			branches: 67,
			functions: 82,
			lines: 85,
			statements: 85,
		},
		'./packages/clay-badge/src/': {
			branches: 0,
			functions: 100,
			lines: 100,
			statements: 100,
		},
		'./packages/clay-breadcrumb/src/': {
			branches: 72,
			functions: 85,
			lines: 95,
			statements: 96,
		},
		'./packages/clay-button/src/': {
			branches: 90,
			functions: 100,
			lines: 100,
			statements: 100,
		},
		'./packages/clay-card/src/': {
			branches: 82,
			functions: 82,
			lines: 95,
			statements: 95,
		},
		'./packages/clay-color-picker/src/': {
			branches: 73,
			functions: 83,
			lines: 85,
			statements: 86,
		},
		'./packages/clay-core/src/overlay-mask/': {
			branches: 73,
			functions: 100,
			lines: 91,
			statements: 91,
		},
		'./packages/clay-core/src/picker/': {
			branches: 59,
			functions: 66,
			lines: 76,
			statements: 76,
		},
		'./packages/clay-core/src/tree-view/': {
			branches: 56,
			functions: 65,
			lines: 66,
			statements: 66,
		},
		'./packages/clay-data-provider/src/': {
			branches: 69,
			functions: 84,
			lines: 86,
			statements: 85,
		},
		'./packages/clay-date-picker/src/': {
			branches: 55,
			functions: 89,
			lines: 81,
			statements: 82,
		},
		'./packages/clay-drop-down/src/': {
			branches: 57,
			functions: 51,
			lines: 70,
			statements: 69,
		},
		'./packages/clay-empty-state/src/': {
			branches: 75,
			functions: 66,
			lines: 80,
			statements: 80,
		},
		'./packages/clay-form/src/': {
			branches: 61,
			functions: 70,
			lines: 85,
			statements: 85,
		},
		'./packages/clay-icon/src/': {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
		'./packages/clay-label/src/': {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
		'./packages/clay-layout/src/': {
			branches: 62,
			functions: 19,
			lines: 76,
			statements: 78,
		},
		'./packages/clay-link/src/': {
			branches: 34,
			functions: 100,
			lines: 90,
			statements: 90,
		},
		'./packages/clay-list/src/': {
			branches: 64,
			functions: 75,
			lines: 93,
			statements: 92,
		},
		'./packages/clay-loading-indicator/src/': {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
		'./packages/clay-modal/src/': {
			branches: 55,
			functions: 81,
			lines: 85,
			statements: 85,
		},
		'./packages/clay-multi-select/src/': {
			branches: 52,
			functions: 54,
			lines: 62,
			statements: 62,
		},
		'./packages/clay-multi-step-nav/src/': {
			branches: 87,
			functions: 92,
			lines: 98,
			statements: 98,
		},
		'./packages/clay-nav/src/': {
			branches: 40,
			functions: 80,
			lines: 93,
			statements: 93,
		},
		'./packages/clay-navigation-bar/src/': {
			branches: 50,
			functions: 100,
			lines: 100,
			statements: 100,
		},
		'./packages/clay-pagination/src/': {
			branches: 86,
			functions: 92,
			lines: 92,
			statements: 98,
		},
		'./packages/clay-pagination-bar/src/': {
			branches: 95,
			functions: 88,
			lines: 94,
			statements: 95,
		},
		'./packages/clay-panel/src/': {
			branches: 88,
			functions: 100,
			lines: 100,
			statements: 100,
		},
		'./packages/clay-popover/src/': {
			branches: 47,
			functions: 43,
			lines: 57,
			statements: 57,
		},
		'./packages/clay-progress-bar/src/': {
			branches: 93,
			functions: 100,
			lines: 100,
			statements: 100,
		},
		'./packages/clay-shared/src/': {
			branches: 17,
			functions: 13,
			lines: 34,
			statements: 37,
		},
		'./packages/clay-slider/src/': {
			branches: 92,
			functions: 75,
			lines: 96,
			statements: 96,
		},
		'./packages/clay-sticker/src/': {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
		'./packages/clay-table/src/': {
			branches: 88,
			functions: 100,
			lines: 100,
			statements: 100,
		},
		'./packages/clay-tabs/src/': {
			branches: 58,
			functions: 66,
			lines: 78,
			statements: 76,
		},
		'./packages/clay-time-picker/src/': {
			branches: 85,
			functions: 95,
			lines: 95,
			statements: 95,
		},
		'./packages/clay-toolbar/src/': {
			branches: 50,
			functions: 12,
			lines: 77,
			statements: 74,
		},
		'./packages/clay-tooltip/src/': {
			branches: 52,
			functions: 61,
			lines: 70,
			statements: 69,
		},
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
	resolver: `${__dirname}/scripts/jest-clay-lerna-resolver`,
	setupFiles: [`${__dirname}/scripts/setupTests.ts`, 'raf/polyfill'],
	setupFilesAfterEnv: [`${__dirname}/scripts/jest-setup.ts`],
	testEnvironment: 'jsdom',
	testMatch: [
		`${process.cwd()}/**/__tests__/**/*.[jt]s?(x)`,
		`${process.cwd()}/**/?(*.)+(spec|test).[jt]s?(x)`,
	],
	testPathIgnorePatterns: [
		'browserslist-config-clay',
		'fixtures',
		'generator-clay-component',
		'lib',
		'clayui.com',
	],
	timers: 'legacy',
	transform: {
		'.(ts|tsx)$': 'ts-jest',
	},
	transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*clay.*).*$'],
};
