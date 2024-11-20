import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { DishDetails } from '../pages/DishDetails'; 
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import { DiningHalls, dishItem } from '../types/menuTypes';

// Mock props for dish and reviews
// Later on when backend is implemented, would be ideal to test with dish_ids
// to see if backend fetches correct dish and it is displayed correct, current 
// test suites are only to check if buttons work well. 

// Use Mocking for now
const mockDish: dishItem = {
    food_id: "testDishID1234567890987654321",
    img: "/images/placeHolderImage.png",
    food_name: "something",
    cost: 1,
    location: { 
        name: "Revelle", 
        location_id: 1, 
        dining_hall: DiningHalls.sixtyfour
    },
    allergens: [],
    rating: 3.25,
    description: "something made with a bit of something cooked in a something topped with something with a side of something",
    numReviews: 0,
    numRecommend: 0,
};

const reviewFormAlertMessage = "Please rate the dish and indicate whether you recommend it before submitting. If you would like to give the dish 0 stars, please click one of the stars twice.";


/**
 *  HELPER METHODS FOR TESTING, DO NOT CALL INDIVIDUALLY UNLESS YOU HAVE RENDERED
 *  THE WEBAPP PAGE FOR DISHDETAILS. 
 * 
 *  Helper Methods for DishDetailsDescription
 */

// Check if the HalfStar should be there if lever is true, checks that halfStar is not there when lever is false
function checkHalfStar(lever: boolean) {
    const halfStarPNG = screen.queryByLabelText('ratingStarHalfFilled');
  
    if (lever) {
      expect(halfStarPNG).not.toBeNull();
      expect(halfStarPNG).toBeInTheDocument();
    } else {
      expect(halfStarPNG).toBeNull();
    }
}

// Checks if the stars are displayed correctly based on the rating. 
function checkStarRating(rating: number){

    const fullStars = Math.floor(rating); 
    const halfStars = rating % 1 >= 0.15 ? 1 : 0; 

     const fullStarElements = screen.getAllByLabelText('ratingStarFilled');
     const fullStarsText = '★'.repeat(fullStars); 
     fullStarElements.forEach((starElement) => {
         expect(starElement.textContent).toBe(fullStarsText);
     });
 
     // Check for the presence of a half-star (if applicable)
     halfStars === 1 ? checkHalfStar(true) : checkHalfStar(false);
 
     const emptyStars = 5 - fullStars - halfStars; 
     const emptyStarElements = screen.getAllByLabelText('ratingStarEmpty');
     const emptyStarsText = '★'.repeat(emptyStars); 
     emptyStarElements.forEach((starElement) => {
         expect(starElement.textContent).toBe(emptyStarsText);
     });

}

// Check the display for % recommend and % like is correct based on backend number of likes and recommendations
function checkRecommendBasedOnDish(numRec: number, numRev: number){
    if (numRev === 0) {
        expect(screen.getByText('No Reviews Yet. Be the First to Review!')).toBeInTheDocument();
    } else {
        const recommend = Math.round((numRec / numRev) * 100);

        expect(screen.getByText(`${recommend}% of people would recommend this dish.`)).toBeInTheDocument();
    }
}

// Check that everything renders correctly based on the dish. 
async function checkDishDetails(dish: dishItem){
    render(
        <MemoryRouter initialEntries={[`/dish_details/${dish.food_id}`]}>
          <DishDetails />
        </MemoryRouter>
    );
    
    await waitFor(() => {
        // Basic Title, Price, Description Checks
        expect(screen.getByText(dish.food_name)).toBeInTheDocument();
        expect(screen.getByText(dish.cost)).toBeInTheDocument();
        expect(screen.getByText(dish.description)).toBeInTheDocument();

        // Check for proper rating displays
        expect(screen.getByText(`${dish.numReviews} reviews`)).toBeInTheDocument();

        const rating = Math.round(dish.rating * 100) / 100;  
        expect(screen.getByText(`${rating} / 5`)).toBeInTheDocument();

        checkStarRating(dish.rating);  // Check star rating based on the fetched dish data
        
        checkRecommendBasedOnDish(dish.numRecommend, dish.numReviews);

        // Check Allergen Description
        if (dish.allergens.length === 0) {
            expect(screen.getByText('Allergens: None')).toBeInTheDocument();
        } else {
            dish.allergens.forEach((allergen) => {
                expect(screen.getByText(allergen)).toBeInTheDocument();
            });
        }
    });

}

/**
 *  Helper Methods for ReviewForm
 */

// click the starNumber-th (1,2,3,4,5) star in the reviewForm section
// valid inputs are 1, 2, 3, 4, 5
function renderReviewFormStar(starNumber: number){

    const stars = screen.getAllByLabelText('reviewFormStars');
    return stars[starNumber - 1]
}

function renderRecommendYes(){
    return screen.getByLabelText("YesButton");
}

function renderRecommendNo(){
    return screen.getByLabelText("NoButton");
}

function renderSubmitReviewButton(){
    return screen.getByLabelText("SubmitButton");
}

function fillOutReviewFormText(text: string){
    const reviewTextArea = screen.getByLabelText("reviewFormInput") as HTMLTextAreaElement;
    fireEvent.change(reviewTextArea, { target: { value: text } });
    expect(reviewTextArea.value).toBe(text);
}

const checkReviews = (expectedTexts: string[], expectedStars: string[]) => {
    const foodReviewContent = screen.getAllByLabelText('foodReviewText');
    const foodReviewStars = screen.getAllByLabelText('foodReviewStars');

    expectedTexts.forEach((text, index) => {
        expect(foodReviewContent[index]).toHaveTextContent(text);
    });
    expectedStars.forEach((stars, index) => {
        expect(foodReviewStars[index]).toHaveTextContent(stars);
    });
};

// CURRENTLY, USE MOCKING TO TEST EVERYTHING
const dish_id = -1; // change this to the mocked dish id eventually once we establish that

describe('DishDetailsDescription Displays correctly', () => {
  
    test('renders basic dish details information, mocking', () => {
        checkDishDetails(mockDish);
    });
    /** 
    // Test for rendering dish details
    test('renders basic dish details information for all dishes', () => {
        
        for each dishItem, call checkDishDetails
        
        
    });
    */
});

// ★☆
describe('reviewForm functions as expected, build on mocked dish', () => {
  
    test('reviewForm renders as expected', () => {
        // Make sure all of the text renders properly

        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
              <DishDetails />
            </MemoryRouter>
        );

        expect(screen.queryByText("Leave a Review")).toBeInTheDocument();
        expect(screen.queryByText("Rate out of 5:")).toBeInTheDocument();
        expect(screen.queryByText("Would you recommend this dish to others?")).toBeInTheDocument();
        
        expect(renderRecommendNo()).toBeInTheDocument();
        expect(renderRecommendYes()).toBeInTheDocument();
        expect(renderSubmitReviewButton()).toBeInTheDocument();
        
        expect(renderReviewFormStar(1)).toBeInTheDocument();
        expect(renderReviewFormStar(2)).toBeInTheDocument();
        expect(renderReviewFormStar(3)).toBeInTheDocument();
        expect(renderReviewFormStar(4)).toBeInTheDocument();
        expect(renderReviewFormStar(5)).toBeInTheDocument();
    
    });

    test('expect review submission success, basic conditions', () => {
        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
              <DishDetails />
            </MemoryRouter>
        );

        // render buttons
        const recYes = renderRecommendYes();
        const recNo = renderRecommendNo();
        const submit = renderSubmitReviewButton();
        const firstStar = renderReviewFormStar(1);

        // pre-review submission check
        const numOneStarRatingBefore = screen.queryAllByText('★☆☆☆☆').length;

        const preReviewText = screen.queryByText('Test Description');
        expect(preReviewText).toBeNull();


        fireEvent.click(recYes);
        fillOutReviewFormText('Test Description');
        fireEvent.click(firstStar);
        fireEvent.click(submit);
        
        // post-review submission check
        const reviewText = screen.getByText('Test Description');
        expect(reviewText).toBeInTheDocument();

        const numOneStarRatingAfter = screen.queryAllByText('★☆☆☆☆').length;
        expect(numOneStarRatingAfter).toBe(numOneStarRatingBefore + 1);        

        expect(screen.getByText('100% of people would recommend this dish.')).toBeInTheDocument();
        expect(screen.getByText('1 / 5 (1 reviews)')).toBeInTheDocument();
        checkStarRating(1);

    });
    
    test('expect review submission success, no review text', () => {
        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
              <DishDetails />
            </MemoryRouter>
        );

        // render buttons
        const recYes = renderRecommendYes();
        const recNo = renderRecommendNo();
        const submit = renderSubmitReviewButton();
        const fourthStar = renderReviewFormStar(4);

        // pre-review submission check
        const numFourStarRatingBefore = screen.queryAllByText('★★★★☆').length;

        const preReviewText = screen.queryByText('Test Description');
        expect(preReviewText).toBeNull();


        fireEvent.click(recYes);
        fireEvent.click(fourthStar);
        fireEvent.click(submit);
        
        // post-review submission check
        const numFourStarRatingAfter = screen.queryAllByText('★★★★☆').length;
        expect(numFourStarRatingAfter).toBe(numFourStarRatingBefore + 1);    

        expect(screen.getByText('100% of people would recommend this dish.')).toBeInTheDocument();
        expect(screen.getByText('4 / 5 (1 reviews)')).toBeInTheDocument();
        checkStarRating(4);

    });

    test('expect review submission success, test buttons 1', () => {
        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
              <DishDetails />
            </MemoryRouter>
        );

        // render buttons
        const recYes = renderRecommendYes();
        const recNo = renderRecommendNo();
        const submit = renderSubmitReviewButton();
        const fourthStar = renderReviewFormStar(4);

        // pre-review submission check
        const numFourStarRatingBefore = screen.queryAllByText('★★★★☆').length;

        const preReviewText = screen.queryByText('Test Description');
        expect(preReviewText).toBeNull();


        fireEvent.click(recYes);
        fireEvent.click(recNo);
        fireEvent.click(recNo);
        fireEvent.click(recYes);
        fireEvent.click(fourthStar);
        fireEvent.click(submit);
        
        // post-review submission check
        const numFourStarRatingAfter = screen.queryAllByText('★★★★☆').length;
        expect(numFourStarRatingAfter).toBe(numFourStarRatingBefore + 1);    

        expect(screen.getByText('100% of people would recommend this dish.')).toBeInTheDocument();
        expect(screen.getByText('4 / 5 (1 reviews)')).toBeInTheDocument();
        checkStarRating(4);

    });

    test('expect review submission success, test buttons 2', () => {
        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
              <DishDetails />
            </MemoryRouter>
        );

        // render buttons
        const recYes = renderRecommendYes();
        const recNo = renderRecommendNo();
        const submit = renderSubmitReviewButton();
        const fourthStar = renderReviewFormStar(4);

        // pre-review submission check
        const numFourStarRatingBefore = screen.queryAllByText('★★★★☆').length;

        const preReviewText = screen.queryByText('Test Description');
        expect(preReviewText).toBeNull();


        fireEvent.click(recYes);
        fireEvent.click(recNo);
        fireEvent.click(recYes);
        fireEvent.click(fourthStar);
        fireEvent.click(submit);
        
        // post-review submission check
        const numFourStarRatingAfter = screen.queryAllByText('★★★★☆').length;
        expect(numFourStarRatingAfter).toBe(numFourStarRatingBefore + 1);    

        expect(screen.getByText('100% of people would recommend this dish.')).toBeInTheDocument();
        expect(screen.getByText('4 / 5 (1 reviews)')).toBeInTheDocument();
        checkStarRating(4);

    });

    test('expect review submission success, test buttons 3', () => {
        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
              <DishDetails />
            </MemoryRouter>
        );

        // render buttons
        const recYes = renderRecommendYes();
        const recNo = renderRecommendNo();
        const submit = renderSubmitReviewButton();
        const fourthStar = renderReviewFormStar(4);

        // pre-review submission check
        const numFourStarRatingBefore = screen.queryAllByText('★★★★☆').length;

        const preReviewText = screen.queryByText('Test Description');
        expect(preReviewText).toBeNull();


        fireEvent.click(recYes);
        fireEvent.click(recNo);

        fireEvent.click(fourthStar);
        fireEvent.click(submit);
        
        // post-review submission check
        const numFourStarRatingAfter = screen.queryAllByText('★★★★☆').length;
        expect(numFourStarRatingAfter).toBe(numFourStarRatingBefore + 1);    

        expect(screen.getByText('0% of people would recommend this dish.')).toBeInTheDocument();
        expect(screen.getByText('4 / 5 (1 reviews)')).toBeInTheDocument();
        checkStarRating(4);

    });

    test('expect review submission success, test star rating 1', () => {
        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
              <DishDetails />
            </MemoryRouter>
        );

        // render buttons
        const recYes = renderRecommendYes();
        const recNo = renderRecommendNo();
        const submit = renderSubmitReviewButton();
        const firstStar = renderReviewFormStar(1);
        const secondStar = renderReviewFormStar(2);
        const thirdStar = renderReviewFormStar(3);
        const fourthStar = renderReviewFormStar(4);
        const fifthStar = renderReviewFormStar(5);

        // pre-review submission check
        const numZeroStarRatingBefore = screen.queryAllByText('☆☆☆☆☆').length;

        const preReviewText = screen.queryByText('Test Description');
        expect(preReviewText).toBeNull();

        // Canceling to get a 0/5 rating
        fireEvent.click(recYes);
        fireEvent.click(fourthStar);
        fireEvent.click(fourthStar);
        fireEvent.click(submit);
        
        // post-review submission check
        const numZeroStarRatingAfter = screen.queryAllByText('☆☆☆☆☆').length;
        expect(numZeroStarRatingAfter).toBe(numZeroStarRatingBefore + 1);    

        expect(screen.getByText('100% of people would recommend this dish.')).toBeInTheDocument();
        expect(screen.getByText('0 / 5 (1 reviews)')).toBeInTheDocument();
        checkStarRating(0);

        
    });

    test('expect review submission success, test star rating 2', () => {
        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
              <DishDetails />
            </MemoryRouter>
        );

        // render buttons
        const recYes = renderRecommendYes();
        const recNo = renderRecommendNo();
        const submit = renderSubmitReviewButton();
        const firstStar = renderReviewFormStar(1);
        const secondStar = renderReviewFormStar(2);
        const thirdStar = renderReviewFormStar(3);
        const fourthStar = renderReviewFormStar(4);
        const fifthStar = renderReviewFormStar(5);

        // pre-review submission check
        const numOneStarRatingBefore = screen.queryAllByText('★☆☆☆☆').length;

        const preReviewText = screen.queryByText('Test Description');
        expect(preReviewText).toBeNull();

        // Canceling to get a 0/5 rating
        fireEvent.click(recYes);
        fireEvent.click(fourthStar);
        fireEvent.click(firstStar);
        fireEvent.click(submit);
        
        // post-review submission check
        const numOneStarRatingAfter = screen.queryAllByText('★☆☆☆☆').length;
        expect(numOneStarRatingAfter).toBe(numOneStarRatingBefore + 1);    

        expect(screen.getByText('100% of people would recommend this dish.')).toBeInTheDocument();
        expect(screen.getByText('1 / 5 (1 reviews)')).toBeInTheDocument();
        checkStarRating(1);

        
    });

    test('expect review submission success, excessive review text entered', () => {
        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
              <DishDetails />
            </MemoryRouter>
        );

        // render buttons
        const recYes = renderRecommendYes();
        const recNo = renderRecommendNo();
        const submit = renderSubmitReviewButton();
        const firstStar = renderReviewFormStar(1);

        // pre-review submission check
        const numOneStarRatingBefore = screen.queryAllByText('★☆☆☆☆').length;

        const preReviewText = screen.queryByText('<BrowserRouter> <html> </html> <h1></h1> <div/>Test asdfasdfasdfadfsjk;ladfskj;lfdakjl;fdajkl;adfjkadfk;jafd;kjlafkdljs;qwopeifuqwopeifjq;wlekfj;lkdjf;lkjasd;lfjqwoeTest asdfasdfasdfadfsjk;ladfskj;lfdakjl;fdajkl;adfjkadfk;jafd;kjlafkdljs;qwopeifuqwopeifjq;wlekfj;lkdjf;lkjasd;lfjqwoeTest asdfasdfasdfadfsjk;ladfskj;lfdakjl;fdajkl;adfjkadfk;jafd;kjlafkdljs;qwopeifuqwopeifjq;wlekfj;lkdjf;lkjasd;lfjqwoeTest asdfasdfasdfadfsjk;ladfskj;lfdakjl;fdajkl;adfjkadfk;jafd;kjlafkdljs;qwopeifuqwopeifjq;wlekfj;lkdjf;lkjasd;lfjqwoeTest asdfasdfasdfadfsjk;ladfskj;lfdakjl;fdajkl;adfjkadfk;jafd;kjlafkdljs;qwopeifuqwopeifjq;wlekfj;lkdjf;lkjasd;lfjqwoe');
        expect(preReviewText).toBeNull();


        fireEvent.click(recYes);
        fillOutReviewFormText('<BrowserRouter> <html> </html> <h1></h1> <div/>Test asdfasdfasdfadfsjk;ladfskj;lfdakjl;fdajkl;adfjkadfk;jafd;kjlafkdljs;qwopeifuqwopeifjq;wlekfj;lkdjf;lkjasd;lfjqwoeTest asdfasdfasdfadfsjk;ladfskj;lfdakjl;fdajkl;adfjkadfk;jafd;kjlafkdljs;qwopeifuqwopeifjq;wlekfj;lkdjf;lkjasd;lfjqwoeTest asdfasdfasdfadfsjk;ladfskj;lfdakjl;fdajkl;adfjkadfk;jafd;kjlafkdljs;qwopeifuqwopeifjq;wlekfj;lkdjf;lkjasd;lfjqwoeTest asdfasdfasdfadfsjk;ladfskj;lfdakjl;fdajkl;adfjkadfk;jafd;kjlafkdljs;qwopeifuqwopeifjq;wlekfj;lkdjf;lkjasd;lfjqwoeTest asdfasdfasdfadfsjk;ladfskj;lfdakjl;fdajkl;adfjkadfk;jafd;kjlafkdljs;qwopeifuqwopeifjq;wlekfj;lkdjf;lkjasd;lfjqwoe');
        fireEvent.click(firstStar);
        fireEvent.click(submit);
        
        // post-review submission check
        const reviewText = screen.getByText('<BrowserRouter> <html> </html> <h1></h1> <div/>Test asdfasdfasdfadfsjk;ladfskj;lfdakjl;fdajkl;adfjkadfk;jafd;kjlafkdljs;qwopeifuqwopeifjq;wlekfj;lkdjf;lkjasd;lfjqwoeTest asdfasdfasdfadfsjk;ladfskj;lfdakjl;fdajkl;adfjkadfk;jafd;kjlafkdljs;qwopeifuqwopeifjq;wlekfj;lkdjf;lkjasd;lfjqwoeTest asdfasdfasdfadfsjk;ladfskj;lfdakjl;fdajkl;adfjkadfk;jafd;kjlafkdljs;qwopeifuqwopeifjq;wlekfj;lkdjf;lkjasd;lfjqwoeTest asdfasdfasdfadfsjk;ladfskj;lfdakjl;fdajkl;adfjkadfk;jafd;kjlafkdljs;qwopeifuqwopeifjq;wlekfj;lkdjf;lkjasd;lfjqwoeTest asdfasdfasdfadfsjk;ladfskj;lfdakjl;fdajkl;adfjkadfk;jafd;kjlafkdljs;qwopeifuqwopeifjq;wlekfj;lkdjf;lkjasd;lfjqwoe');
        expect(reviewText).toBeInTheDocument();

        const numOneStarRatingAfter = screen.queryAllByText('★☆☆☆☆').length;
        expect(numOneStarRatingAfter).toBe(numOneStarRatingBefore + 1);        

        expect(screen.getByText('100% of people would recommend this dish.')).toBeInTheDocument();
        expect(screen.getByText('1 / 5 (1 reviews)')).toBeInTheDocument();
        checkStarRating(1);
    });
    
    test('expect review submission success, multiple reviews 1', () => {
        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
              <DishDetails />
            </MemoryRouter>
        );

        // render buttons
        const recYes = renderRecommendYes();
        const recNo = renderRecommendNo();
        const submit = renderSubmitReviewButton();
        const firstStar = renderReviewFormStar(1);
        const secondStar = renderReviewFormStar(2);
        const thirdStar = renderReviewFormStar(3);
        const fourthStar = renderReviewFormStar(4);
        const fifthStar = renderReviewFormStar(5);

        // pre-review submission check
        const numFourStarRatingBefore = screen.queryAllByText('★★★★☆').length;
        const numOneStarRatingBefore = screen.queryAllByText('★☆☆☆☆').length;

        const preReviewText = screen.queryByText('Test Description');
        expect(preReviewText).toBeNull();


        fireEvent.click(recYes);
        fireEvent.click(fourthStar);
        fireEvent.click(submit);

        fireEvent.click(recYes);
        fireEvent.click(firstStar);
        fireEvent.click(fourthStar);
        fireEvent.click(submit);
        

        fireEvent.click(recYes);
        fireEvent.click(recNo);
        fireEvent.click(firstStar);
        fireEvent.click(submit);

        fireEvent.click(recNo);
        fireEvent.click(firstStar);
        fireEvent.click(submit);

        // post-review submission check
        const numFourStarRatingAfter = screen.queryAllByText('★★★★☆').length;
        expect(numFourStarRatingAfter).toBe(numFourStarRatingBefore+ 2);    

        const numOneStarRatingAfter = screen.queryAllByText('★☆☆☆☆').length;
        expect(numOneStarRatingAfter).toBe(numOneStarRatingBefore + 2);    

        expect(screen.getByText('50% of people would recommend this dish.')).toBeInTheDocument();
        expect(screen.getByText('2.5 / 5 (4 reviews)')).toBeInTheDocument();
        checkStarRating(2.5);
        
    });

    test('expect review submission failure, recommend pressed but not stars', () => {
        const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
              <DishDetails />
            </MemoryRouter>
        );

        // render buttons
        const recYes = renderRecommendYes();
        const recNo = renderRecommendNo();
        const submit = renderSubmitReviewButton();
        const firstStar = renderReviewFormStar(1);


        fireEvent.click(recYes);
        fillOutReviewFormText('Test Description');
        fireEvent.click(submit);

        try {
            expect(alertSpy).toHaveBeenCalledTimes(1);
            expect(alertSpy).toHaveBeenCalledWith(reviewFormAlertMessage);
        } finally {
            alertSpy.mockRestore();
        }
    });

    test('expect review submission failure, star pressed but not recommend', () => {
        const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
              <DishDetails />
            </MemoryRouter>
        );

        // render buttons
        const recYes = renderRecommendYes();
        const recNo = renderRecommendNo();
        const submit = renderSubmitReviewButton();
        const firstStar = renderReviewFormStar(1);


        fireEvent.click(firstStar);
        fillOutReviewFormText('Test Description');
        fireEvent.click(submit);

        try {
            expect(alertSpy).toHaveBeenCalledTimes(1);
            expect(alertSpy).toHaveBeenCalledWith(reviewFormAlertMessage);
        } finally {
            alertSpy.mockRestore();
        }
    });

    test('expect review submission failure, recommend buttons pressed twice at each time (so it should set the recommend field to null)', () => {
        const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
              <DishDetails />
            </MemoryRouter>
        );

        // render buttons
        const recYes = renderRecommendYes();
        const recNo = renderRecommendNo();
        const submit = renderSubmitReviewButton();
        const firstStar = renderReviewFormStar(1);

        fireEvent.click(recYes);
        fireEvent.click(recYes);
        fireEvent.click(firstStar);
        fillOutReviewFormText('Test Description');
        fireEvent.click(submit);

        try {
            expect(alertSpy).toHaveBeenCalledTimes(1);
            expect(alertSpy).toHaveBeenCalledWith(reviewFormAlertMessage);
        } finally {
            alertSpy.mockRestore();
        }
    });

    test('expect review submission failure, nothing pressed', () => {

        const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
              <DishDetails />
            </MemoryRouter>
        );

        // render buttons
        const recYes = renderRecommendYes();
        const recNo = renderRecommendNo();
        const submit = renderSubmitReviewButton();
        const firstStar = renderReviewFormStar(1);

        fireEvent.click(submit);

        try {
            expect(alertSpy).toHaveBeenCalledTimes(1);
            expect(alertSpy).toHaveBeenCalledWith(reviewFormAlertMessage);
        } finally {
            alertSpy.mockRestore();
        }
    });

    test('expect review submission failure, text entered but nothing else pressed', () => {

        const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
              <DishDetails />
            </MemoryRouter>
        );

        // render buttons
        const recYes = renderRecommendYes();
        const recNo = renderRecommendNo();
        const submit = renderSubmitReviewButton();
        const firstStar = renderReviewFormStar(1);

        fillOutReviewFormText('Test Description');
        fireEvent.click(submit);

        try {
            expect(alertSpy).toHaveBeenCalledTimes(1);
            expect(alertSpy).toHaveBeenCalledWith(reviewFormAlertMessage);
        } finally {
            alertSpy.mockRestore();
        }
    });
});


describe('ReviewList displays correctly', () => {
  
    
    test('check the sorting functionality works', () => {
        render(
            <MemoryRouter initialEntries={[`/dish_details/${dish_id}`]}>
                <DishDetails />
            </MemoryRouter>
        );

        // Render buttons
        const recYes = renderRecommendYes();
        const submit = renderSubmitReviewButton();
        const stars = [renderReviewFormStar(1), renderReviewFormStar(2),renderReviewFormStar(5), renderReviewFormStar(3)];

        // Create reviews with different star ratings
        const reviewTexts = ['Review 1', 'Review 2', 'Review 3', 'Review 4'];
        reviewTexts.forEach((text, index) => {
            fireEvent.click(recYes);
            fillOutReviewFormText(text);
            fireEvent.click(stars[index]);
            fireEvent.click(submit);
        });

        const sortDropdown = screen.getByLabelText('foodReviewsSortOptions') as HTMLSelectElement;

        // Test cases for each sort option
        const sortOptions = [
            { value: 'mostRecent', texts: ['Review 4', 'Review 3', 'Review 2', 'Review 1'], stars: ['★★★☆☆', '★★★★★', '★★☆☆☆', '★☆☆☆☆'] },
            { value: 'mostCritical', texts: ['Review 1', 'Review 2', 'Review 4', 'Review 3'], stars: ['★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★★'] },
            { value: 'highestRated', texts: ['Review 3', 'Review 4', 'Review 2', 'Review 1'], stars: ['★★★★★', '★★★☆☆', '★★☆☆☆', '★☆☆☆☆'] },
            { value: 'oldest', texts: ['Review 1', 'Review 2', 'Review 3', 'Review 4'], stars: ['★☆☆☆☆', '★★☆☆☆', '★★★★★', '★★★☆☆'] },
        ];

        // Loop through each sorting option and validate
        sortOptions.forEach(({ value, texts, stars }) => {
            fireEvent.change(sortDropdown, { target: { value } });
            expect(sortDropdown.value).toBe(value);
            checkReviews(texts, stars);
        });
    });
    
});