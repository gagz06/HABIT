
    // Assuming `habitData` is an array of objects with date and status
    const habitData = [
        { date: 'Sat Sep 02 2023', status: 'Done' },
        { date: 'Thu Aug 24 2023', status: 'Not done' },
        { date: 'Wed Aug 23 2023', status: 'Done' },
        { date: 'Tue Aug 22 2023', status: 'None' },
        { date: 'Mon Aug 21 2023', status: 'Done' },
        { date: 'Sun Aug 20 2023', status: 'Not done' },
        { date: 'Sat Aug 19 2023', status: 'Done' }
    ];
    // Function to generate the calendar
    function generateCalendar() {
        const calendarDiv = document.querySelector('.calendar');
        const today = new Date();

        // Loop through each day in the calendar
        for (let i = 0; i < 7; i++) {
            const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
            const dateString = currentDate.toDateString();
            const dayOfWeek = getDayOfWeek(currentDate); // Get the day of the week

            // Find the status for the current date
            const habit = habitData.find(habit => habit.date === dateString);
            let statusIcon = '';
            if (habit) {
                if (habit.status === 'Done') {
                    statusIcon = '<span class="tick">&#10004;</span>';
                } else if (habit.status === 'Not done') {
                    statusIcon = '<span class="cross">&#10008;</span>';
                }
            }

            // Create a calendar day element
            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day');
            dayElement.innerHTML = `
                <div class="day-of-week">${dayOfWeek}</div>
                <div>${currentDate.getDate()}</div>
                <div>${statusIcon}</div>
            `;

            calendarDiv.appendChild(dayElement);
        }
    }

    generateCalendar();

    function getDayOfWeek(date) {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return daysOfWeek[date.getDay()];
    }