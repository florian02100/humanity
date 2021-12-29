import React from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';
import * as RiIcons from 'react-icons/ri'
import './TagFeed.css'

const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];

class Tag extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [
                { id: "0", text: <p><RiIcons.RiSendPlaneFill /> Thailland</p>},
                { id: "1", text: "India" }
             ],
            suggestions: [
                { id: 'USA', text: 'USA' },
                { id: 'Germany', text: 'Germany' },
                { id: 'Austria', text: 'Austria' },
                { id: 'Costa Rica', text: 'Costa Rica' },
                { id: 'Sri Lanka', text: 'Sri Lanka' },
                { id: 'Thailand', text: 'Thailand' }
             ],
             icons: [
                 {id:'0',text:''},
                 {id:'1',text:'<RiIcons.RiSendPlaneFill />'}
             ],
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }

    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }

    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: newTags });
    }

    render() {
        const { tags, suggestions,icons } = this.state;
        return (
            <div className="TagContainer">
                <h5>Critères feed</h5>
                <hr className="hr-cards"/>
                <ReactTags tags={tags}
                    icons={icons}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    delimiters={delimiters} />
            </div>
        )
    }
};

ReactDOM.render(<Tag />, document.getElementById('root'));
export default Tag;