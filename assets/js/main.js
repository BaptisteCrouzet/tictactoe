let symbol = 'croix';
let result = new Array();
result[0] = '';

function switchSymbol() {
	if (symbol == 'croix') {
		symbol = 'rond';
	} else {
		symbol = 'croix';
	}
}

function setSymbol($_this) {
	if (symbol == 'croix') {
		if ($($_this).css('backgroundImage') == 'none') {
			$($_this).css('backgroundImage', 'url(dist/images/croce.svg)');
			$($_this).text('x');
			switchSymbol();
		}
	} else {
		if ($($_this).css('backgroundImage') == 'none') {
			$($_this).css('backgroundImage', 'url(dist/images/circle.svg)');
			$($_this).text('c');
			switchSymbol();
		}
	}
}

function isThereAWinner($_this) {
	// fonction qui check les composition gagnantes soit:
	// 123, 456, 789
	// 147, 258, 369
	// 753, 159
	if (
		($($('.case')[1]).text() == 'x' && $($('.case')[2]).text() == 'x' && $($('.case')[3]).text() == 'x') ||
		($($('.case')[4]).text() == 'x' && $($('.case')[5]).text() == 'x' && $($('.case')[6]).text() == 'x') ||
		($($('.case')[7]).text() == 'x' && $($('.case')[8]).text() == 'x' && $($('.case')[9]).text() == 'x') ||
		($($('.case')[1]).text() == 'x' && $($('.case')[4]).text() == 'x' && $($('.case')[7]).text() == 'x') ||
		($($('.case')[2]).text() == 'x' && $($('.case')[5]).text() == 'x' && $($('.case')[8]).text() == 'x') ||
		($($('.case')[3]).text() == 'x' && $($('.case')[6]).text() == 'x' && $($('.case')[9]).text() == 'x') ||
		($($('.case')[7]).text() == 'x' && $($('.case')[5]).text() == 'x' && $($('.case')[3]).text() == 'x') ||
		($($('.case')[1]).text() == 'x' && $($('.case')[5]).text() == 'x' && $($('.case')[9]).text() == 'x')
	) {
		$('#result').text('X gagne !');
	}

	if (
		($($('.case')[1]).text() == 'c' && $($('.case')[2]).text() == 'c' && $($('.case')[3]).text() == 'c') ||
		($($('.case')[4]).text() == 'c' && $($('.case')[5]).text() == 'c' && $($('.case')[6]).text() == 'c') ||
		($($('.case')[7]).text() == 'c' && $($('.case')[8]).text() == 'c' && $($('.case')[9]).text() == 'c') ||
		($($('.case')[1]).text() == 'c' && $($('.case')[4]).text() == 'c' && $($('.case')[7]).text() == 'c') ||
		($($('.case')[2]).text() == 'c' && $($('.case')[5]).text() == 'c' && $($('.case')[8]).text() == 'c') ||
		($($('.case')[3]).text() == 'c' && $($('.case')[6]).text() == 'c' && $($('.case')[9]).text() == 'c') ||
		($($('.case')[7]).text() == 'c' && $($('.case')[5]).text() == 'c' && $($('.case')[3]).text() == 'c') ||
		($($('.case')[1]).text() == 'c' && $($('.case')[5]).text() == 'c' && $($('.case')[9]).text() == 'c')
	) {
		$('#result').text('O gagne !');
	}

	// @todo
	if (result.length == 10) {
		$('#result').text('Egalité !');
	}
}

$(document).ready(function() {
	ScrollReveal().reveal('img');

	$('.case').on('click', function() {
		setSymbol($(this));
		isThereAWinner($(this));
	});

	$('#restart').on('click', function() {
		$('#result').text('');
		$('.case').each(function() {
			$(this).text('');
			$(this).css('backgroundImage', 'none');
		});
	});
});
