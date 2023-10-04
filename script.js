const formElements = {
    city: document.getElementById('city'),
    department: document.getElementById('department'),
    employee: document.getElementById('employee'),
    team: document.getElementById('team'),
    change: document.getElementById('change')
};

const departments = {
    'department1': [
        { value: 'employee1', text: 'Сотрудник 1' },
        { value: 'employee2', text: 'Сотрудник 2' }
    ],
    'department2': [
        { value: 'employee3', text: 'Сотрудник 3' },
        { value: 'employee4', text: 'Сотрудник 4' }
    ],
    'department3': [
        { value: 'employee5', text: 'Сотрудник 5' },
        { value: 'employee6', text: 'Сотрудник 6' }
    ],
    'department4': [
        { value: 'employee7', text: 'Сотрудник 7' },
        { value: 'employee8', text: 'Сотрудник 8' }
    ],
    'department5': [
        { value: 'employee9', text: 'Сотрудник 9' },
        { value: 'employee10', text: 'Сотрудник 10' }
    ],
    'department6': [
        { value: 'employee11', text: 'Сотрудник 11' },
        { value: 'employee12', text: 'Сотрудник 12' }
    ]
};

const cities = {
    'city1': [
        { value: 'department1', text: 'Цех 1' },
        { value: 'department2', text: 'Цех 2' }
    ],
    'city2': [
        { value: 'department3', text: 'Цех 3' },
        { value: 'department4', text: 'Цех 4' }
    ],
    'city3': [
        { value: 'department5', text: 'Цех 5' },
        { value: 'department6', text: 'Цех 6' }
    ]
};

function saveData() {
    try {
        const dataToSave = {
            city: formElements.city.value,
            department: formElements.department.value,
            employee: formElements.employee.value,
            team: formElements.team.value,
            change: formElements.change.value
        };
        const jsonData = JSON.stringify(dataToSave);
        document.cookie = 'formData=' + jsonData;

        alert('Данные сохранены успешно!');
    } catch (error) {
        console.error('Произошла ошибка при сохранении данных:', error);
        alert('Произошла ошибка при сохранении данных. Пожалуйста, проверьте консоль для получения дополнительной информации.');
    }
}

function Dropdown(depId, empId, option) {
    const selectedValue = formElements[depId].value;
    const targetDrop = formElements[empId];

    targetDrop.innerHTML = '';

    if (option[selectedValue]) {
        option[selectedValue].forEach(option => {
            addOption(targetDrop, option.value, option.text);
        });
    }
}
function addOption(selectElement, value, text) {
    const option = document.createElement('option');
    option.value = value;
    option.text = text;
    selectElement.add(option);
}
