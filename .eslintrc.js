module.exports = {
	'env': {
		'node': true,
		'browser': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 12
	},
	'rules': {
		// 세미콜론 붙이기
		'semi': ['error', 'always'],
		// 작은 따옴표 사용
		'quotes': ['error', 'single'],
		// 조건/반복문/제어문에 중괄호 사용
		'curly': 'error',
		// 오브젝트에 속성으로 접근할 때는 .(점)을 사용한다.
		'dot-notation': ['error', { allowKeywords: true }],
		// disallow declaration of variables that are not used in the code
		'no-unused-vars': ['error', {
			'args': 'none'
		}],
		// , 뒤의 공백
		'comma-spacing': ['error', { before: false, after: true }],
		// :을 사용하는 경우 뒤에 공백
		'key-spacing': ['error', {
			'afterColon': true
		}],
		// 산술 연산자, 비교 연산자 앞뒤 공백
		'space-infix-ops': 'error',
		// console.log 경고
		'no-console': ['warn'],
	}
};
