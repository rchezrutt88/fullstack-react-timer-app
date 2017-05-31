
class TimersDashboard extends React.Component {

    state = {
        timers: [
            {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: uuid.v4(),
                elapsed: 5456099,
                runningSince: Date.now()
            },
            {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: uuid.v4(),
                elapsed: 1273998,
                runningSince: null

            }
        ]
    }

    render() {
        return
        <div className="ui three column centered grid">
            <div className="column">
                <EditableTimerList
                    timers={this.state.timers}
                />
                <ToggleabeTimerForm
                    isOpen={true}
                />
            </div>
        </div>
    }
}

class EditableTimerList extends React.Component {

    render() {
        const timers = this.props.timers.map((timer) => (
            <EditableTimer
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince{timer.runningSince}
            />
        ));

        return (
            <div id="timers">
                {timers}
            </div>
        );
    }
}

class EditableTimer extends React.Component {

    state = {
        editFormOpen: false
    }

    render() {
        if (this.props.editFormOpen) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                />
            );
        } else {
            return (
                <Timer
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                />
            )
        }
    }
}

class TimerForm extends React.Component {

    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                            <label>Title</label>
                            <input type="text" defaultValue={this.props.title}/>
                        </div>
                        <div className="field">
                            <label>Project</label>
                            <input type="text" defaultValue={this.props.project}/>
                        </div>
                        <div className="ui two bottom attached buttons">
                            <button className="ui basic blue button">
                                {submitText}
                            </button>
                            <button className="ui basic red button">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <TimersDashboard/>,
    document.getElementById('content')
);