function ChoiceViewModel(parent, data) {
    var self = this;

    self.data = data;

    self.selected = ko.observable(false);

    self.click = function() {
        self.selected(!self.selected());
    };
};

function IndexViewModel() {
    var self = this;

    self.choiceModels = ko.computed(function() {
        var foodChoices = protein;
        var choices = [];

        for (var i = 0; i < foodChoices.length; i++) {
            choices.push(new ChoiceViewModel(self, foodChoices[i]));
        }

        return choices;
    });

    self.foodGrid = ko.computed(function () {
        var foodChoices = self.choiceModels();
        var groupedChoices = [];

        for (var i = 0; i < foodChoices.length; i += 2) {
            groupedChoices.push([foodChoices[i], i + 1 < foodChoices.length ? foodChoices[i + 1] : null]);
        }

        return groupedChoices;
    });

    self.choiceMade = ko.computed(function () {
        var choices = self.choiceModels();
        var selections = [];

        for (var i = 0; i < choices.length; i++) {
            if (choices[i].selected()) {
                selections.push(choices[i]);
            }
        }

        return selections;
    });

    self.choiceMade.subscribe(function(newValue) {
        if (newValue.length === 2) {
            window.location.href = 'details.html';
        }
    });
}

ko.applyBindings(new IndexViewModel());