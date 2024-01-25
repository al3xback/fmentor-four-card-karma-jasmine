describe('DOM', () => {
	beforeEach(() => {
		document.body.insertAdjacentHTML('afterbegin', getBodyContent());
	});

	afterEach(function () {
		document.body.removeChild(document.getElementById('wrapper'));
	});

	it('should have a number type of each card list image width and height attribute values', () => {
		const cardImgEls = document.querySelectorAll('.card__image img');

		for (let i = 0; i < cardImgEls.length; i++) {
			const cardImgEl = cardImgEls[i];
			const cardImgWidth = parseInt(cardImgEl.getAttribute('width'));
			const cardImgHeight = parseInt(cardImgEl.getAttribute('height'));

			expect(cardImgWidth).toBeInstanceOf(Number);
			expect(cardImgHeight).toBeInstanceOf(Number);
		}
	});

	it("should have a title element that contains 'Reliable, efficient delivery' word", () => {
		const cardsSummaryTitleEl = document.querySelector(
			'.cards-summary__title'
		);
		const cardsSummaryTitle = cardsSummaryTitleEl.textContent.trim();

		expect(cardsSummaryTitle).toContain('Reliable, efficient delivery');
	});

	it('should have two children inside of the section element', () => {
		const sectionEl = document.querySelector('section');
		const sectionChildrenEls = sectionEl.children;

		expect(sectionChildrenEls).toHaveSize(2);
	});

	it('should have an empty alt attribute value of each card list item image element', () => {
		const cardListItemImgEls =
			document.querySelectorAll('.card__image img');

		for (let i = 0; i < cardListItemImgEls.length; i++) {
			const cardListItemImgAlt = cardListItemImgEls[i].alt;

			expect(cardListItemImgAlt).toBe('');
		}
	});
});
