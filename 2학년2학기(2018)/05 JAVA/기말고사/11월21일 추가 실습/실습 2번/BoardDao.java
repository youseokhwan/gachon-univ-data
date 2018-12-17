import java.util.ArrayList;
import java.util.List;

public class BoardDao {
	public List<Board> getBoardList() {
		List<Board> list = new ArrayList<Board>();
		list.add(new Board("力格 1", "郴侩1"));
		list.add(new Board("力格 2", "郴侩2"));
		list.add(new Board("力格 3", "郴侩4"));
		return list;
	}

}
